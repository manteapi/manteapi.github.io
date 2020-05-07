README
======

Author
----------
*manteapi*

Objectives
----------

### Short term
    * Webpage facility
    * Public project hosting

### Long term

    1. Html/CSS learning
    2. Html/CSS testing

Clean + Build + Start development server
----------------------------------------

<pre><code>npm start</code></pre>

Build
-----

<pre><code>npm run build</code></pre>

Clean
-----

<pre><code>npm run clean:project</code></pre>

Image dithering
---------------

<pre><code>convert input.png -colorspace gray -ordered-dither o8x8 -normalize output.png</code></pre>

Image conversion
----------------

<pre><code>
for f in $(find . -type f -name *.jpg -not -path "./_site/*" -not -path "./node_modules/*"); do convert $f ${f%.*}".png"; done
</code></pre>

Image dithering
---------------

<pre><code>
for f in $(find . -type f -name *.png -not -path "./_site/*" -not -path "./node_modules/*"); do convert $f -colorspace gray -ordered-dither o8x8 -normalize $f; done
</code></pre>

<pre><code>
for f in $(find . -type f -name *.png -not -path "./_site/*" -not -path "./node_modules/*"); do convert $f -ordered-dither h8x8a -normalize $f; done
</code></pre>

Image resizing
--------------

<pre><code>
for f in $(find . -type f -name *.png -not -path "./_site/*" -not -path "./node_modules/*"); do convert $f -resize 512x512\> $f; done
</code></pre>
