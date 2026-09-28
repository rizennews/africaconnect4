Add-Type -AssemblyName System.Drawing

$srcPath = Join-Path $PSScriptRoot "..\public\og-preview.jpeg"
$src = [System.Drawing.Image]::FromFile($srcPath)

function Save-ResizedImage {
    param (
        [System.Drawing.Image]$source,
        [int]$width,
        [int]$height,
        [string]$outputPath,
        [double]$scaleFactor = 0.88
    )

    $bmp = New-Object System.Drawing.Bitmap($width, $height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::White)

    # Maintain aspect ratio with padding
    $srcAspect = $source.Width / $source.Height
    $targetAspect = $width / $height

    if ($srcAspect -gt $targetAspect) {
        $drawWidth = [int]($width * $scaleFactor)
        $drawHeight = [int]($drawWidth / $srcAspect)
    } else {
        $drawHeight = [int]($height * $scaleFactor)
        $drawWidth = [int]($drawHeight * $srcAspect)
    }

    $drawX = [int](($width - $drawWidth) / 2)
    $drawY = [int](($height - $drawHeight) / 2)

    $g.DrawImage($source, $drawX, $drawY, $drawWidth, $drawHeight)
    $g.Dispose()

    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)
    $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $bmp.Save($outputPath, $jpegCodec, $encoderParams)
    $bmp.Dispose()
    Write-Host "Generated: $outputPath ($($width)x$($height))"
}

# 1. Primary Open Graph Landscape (1200 x 630)
$ogPath = Join-Path $PSScriptRoot "..\public\og-image.jpg"
Save-ResizedImage -source $src -width 1200 -height 630 -outputPath $ogPath -scaleFactor 0.86

# 2. Square OG Preview for compact cards & messengers (600 x 600)
$squarePath = Join-Path $PSScriptRoot "..\public\og-image-square.jpg"
Save-ResizedImage -source $src -width 600 -height 600 -outputPath $squarePath -scaleFactor 0.90

$src.Dispose()
Write-Host "OG image dimensions successfully processed."
