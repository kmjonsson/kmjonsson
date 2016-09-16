#!/bin/sh

rm -f themes/*.png
for f in radio plane fot photo; do
	for s in 110 180 240; do
		convert $f.png -resize "${s}x$s" theme/$f$s.png
	done
done
for f in radio plane fot photo; do
	for s in 256; do
		convert $f.png -resize "${s}x$s" -negate theme/$$.png
		convert theme/$$.png -color-matrix '0.9 0 0   0 0.9 0  0 0 0.9' theme/$f$s-25.png
		rm theme/$$.png
	done
done
