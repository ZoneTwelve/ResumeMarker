# ResumeWaterMarker

A faster way to apply multiple water mark into a same pdf.

## Requirement
- Node.js
  - [Node-Canvas](https://www.npmjs.com/package/canvas) [GitHub](https://github.com/Automattic/node-canvas)
- [qpdf](https://qpdf.readthedocs.io/en/stable/installation.html)
  - Installation:
    - brew: `brew install qpdf`
    - APT: `apt-get install qpdf`

## How to run

As a terminal user:
```bash
# cp $PATH_OF_RESUME ./Resume.pdf
cd src
./process.sh
```

## TODO
- remove the qpdf, just add the water mark on the original pdf.
