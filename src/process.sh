#!/bin/bash
SPDF=Resume.pdf
PMARK=pdf # Process wather mark folder
OUTF=result # Output folder

# Water mark image to pdf
node main.js

for i in {0..11}
do
  # Merge every water mark pdf into Source PDF
  qpdf --underlay $SPDF \
       --repeat=1 \
       -- "$PMARK/sign-$i.pdf" "$OUTF/output-$i.pdf"
done

# Merge all the result pdf
qpdf --empty --pages $OUTF/output-*.pdf -- $OUTF/final.pdf