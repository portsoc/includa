Includa
==

This library, when included in a page, will search the DOM for elements that have the attribute `data-includa-url`.

For each occurrence of the `data-includa-url`:

* The source of the URL is loaded and added to a `pre` element which is inserted into the element containing the `data-includa-url` attribute.  
* An `iframe` containing the contents of the url is appended after the `pre` element.  This is useful for sandboxing HTML content. 
* If the element also includes a `data-includa-sandbox` attribute whose value is `false` then the content is injected directly into the page without using an iframe.
* If the element also includes a `data-includa-interpret` attribute whose value is `false` then the source code is included but the `iframe` is omitted.

License
==
All content in this repository is licensed under CC-BY-SA 3.0
http://creativecommons.org/licenses/by-sa/3.0/
