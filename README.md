# toggle-on-scroll-directive#
Angular JS Directive for hiding/displaying an Element depending on whether a specific other element is in view or not. 

#How to use#

##JS Code##
```javascript
<script type="text/javascript" src="hausen-tglScroll.js"></script>

//element you want to hide/display
<div id="foo"></div>

//element for scroll reference
<div toggle-on-scroll toggle-elm-id="foo" show-on-destroy="true"></div>

```
Parameter: 

	{string} toggle-elm-id : id of the element you want to show/hide
	{boolean} show-on-destroy: should the element you want to show/hide be shown when scope is destroyed (e.g. on route change) 
##CSS##
```html
<style>
#foo{
	display:none;
}
</style>
```
