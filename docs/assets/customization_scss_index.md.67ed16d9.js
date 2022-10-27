import{_ as s,o as n,c as a,d as p}from"./app.110f3eb3.js";const F=JSON.parse('{"title":"SCSS","description":"Datepicker custom scss configuration","frontmatter":{"title":"SCSS","description":"Datepicker custom scss configuration"},"headers":[],"relativePath":"customization/scss/index.md"}'),l={name:"customization/scss/index.md"},o=p(`<h1 id="scss" tabindex="-1">SCSS <a class="header-anchor" href="#scss" aria-hidden="true">#</a></h1><p>For easier style configuration you can import the <code>scss</code> file and modify the default properties</p><div class="language-scss"><button class="copy"></button><span class="lang">scss</span><pre><code><span class="line"><span style="color:#89DDFF;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Info</p><ul><li>If you are modifying the scss variables, make sure that you override the variable before importing the <code>scss</code> file</li><li>Do not import <code>css</code> file if you import the <code>scss</code> file</li></ul></div><p>Available properties are:</p><div class="language-scss"><button class="copy"></button><span class="lang">scss</span><pre><code><span class="line"><span style="color:#676E95;">// General</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__font_family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -apple-system</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blinkmacsystemfont</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Segoe UI</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> roboto</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> oxygen</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ubuntu</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cantarell</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Open Sans</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Helvetica Neue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sans-serif </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Font size for the menu</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__border_radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Border radius everywhere</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__cell_border_radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $dp__border_radius </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Specific border radius for the calendar cell</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Transitions</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__transition_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Passed to the translateX in animation</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__transition_duration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.1s</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Transition duration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Sizing</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__button_height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// size for buttons in overlays</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__month_year_row_height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// height of the month-year select row</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__month_year_row_button_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Specific height for the next/previous buttons</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__button_icon_height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// icon sizing in buttons</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__cell_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// width and height of calendar cell</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__cell_padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// padding in the cell</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__common_padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__input_padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// padding in the input</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__input_icon_padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Padding on the left side of the input if icon is present</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__menu_min_width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">260px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Adjust the min width of the menu</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__action_buttons_padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Adjust padding for the action buttons in action row</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__row_margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Adjust the spacing between rows in the calendar</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__calendar_header_cell_padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5rem</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Adjust padding in calendar header cells</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__two_calendars_spacing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Space between two calendars if using two calendars</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__overlay_col_padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Padding in the overlay column</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__time_inc_dec_button_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">32px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Sizing for arrow buttons in the time picker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Font sizes</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__font_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1rem</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// overall font-size</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__preview_font_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.8rem</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// font size of the date preview in the action row</span></span>
<span class="line"><span style="color:#A6ACCD;">$dp__time_font_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2rem</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// font size in the time picker</span></span>
<span class="line"></span></code></pre></div>`,6),e=[o];function t(c,r,C,y,D,A){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{F as __pageData,d as default};