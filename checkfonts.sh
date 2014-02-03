#!/bin/sh
echo "resume:"
strings "Kevin Lee resume.pdf" | grep FontName
echo "portfolio:"
strings "Kevin Lee portfolio sampler.pdf" | grep FontName

