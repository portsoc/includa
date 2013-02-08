Includa
==

This library, when included in a page, will search the DOM for elements that have the attribute `data-includa-url`.

For each occurrence of the `data-includa-url`, the source of the URL is loaded and added to a `pre` element.  The `pre` element is appended as a child of the element containing the `data-includa-url` attribute.  Additionally, an `iframe` containing the contents of the url is appended after the `pre` element.

If the element also includes a `data-includa-interpret` attribute whose value is `false` then the source code is included but the `iframe` is omitted.

License
==
All content in this repository is licensed under CC-BY-SA 3.0
http://creativecommons.org/licenses/by-sa/3.0/
