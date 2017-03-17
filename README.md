# Simple HTML Menu

Simple responsive HTML menu for landing pages or websites. This uses the <a href="https://github.com/zachakbar/boilerplate" target="_blank">Boilerplate</a> as a base. All styles for the menu can be found in <code>_source/scss/_elements/<strong>_header.scss</strong></code>.

HTML
```html
<header role="banner">
	<div class="wrap">
		<a class="logo" href="/"><img src="assets/img/logo.png" alt="Site Name"></a>
		<a href="#menu" id="nav_btn">
			<div id="nav_icon">
				<span></span>
				<span></span>
				<span></span>
			</div>
			Menu
		</a>
		
		<nav id="menu" role="navigation">
			<ul>
				<li><a href="#">Item 1</a></li>
				<li><a href="#">Item 2</a></li>
				<li><a href="#">Item 3</a></li>
			</ul>
		</nav>
	</div>
</header>
```

SCSS
```html
header[role="banner"] {
	@include clearfix;
	@include background-image(linear-gradient(to bottom, tint($black,25%), tint($darkgrey,50%)));
	
	.wrap {
		padding: 0;
		
		@include breakpoint($md){
			@include wrap();
		}
	}
	
	.logo {
		display: inline-block;
		padding: 2rem 1.5rem;
	}
	
	#nav_btn {
		color: $white;
		font-size: 1.8rem;
		text-decoration: none;
		padding: 3rem 1.5rem 0 0;
		float: right;
	    
		@include breakpoint($md) {
			display: none !important;
		}
		
		#nav_icon {
			display: inline-block;
			width: 17px;
			height: 1.2rem;
			position: relative;
			margin: 0;
			cursor: pointer;
			@include rotate(0deg);
			@include transition(0.25s,ease-in-out);
		  
			&.open {
				span:nth-child(1) {
					@include rotate(45deg);
					top: -1px;
					left: 0;
				}
				span:nth-child(2) {
					width: 0%;
					opacity: 0;
				}
				span:nth-child(3) {
					@include rotate(-45deg);
					top: 11px;
					left: 0;
				}
			}
		  
			span {
				display: block;
				position: absolute;
				height: 2px;
				width: 100%;
				background: $white;
				border-radius: 0px;
				opacity: 1;
				left: 0;
				@include rotate(0deg);
				@include transition(0.25s,ease-in-out);
			  
				&:nth-child(1) {
					top: 0px;
					@include transform-origin(left,center);
				}
				&:nth-child(2) {
					top: 5px;
					@include transform-origin(left,center);
				}
				&:nth-child(3) {
					top: 10px;
					@include transform-origin(left,center);
				}
			}
		}
	}
	
	nav[role="navigation"] {
	    @include clearfix;
	    background-color: $black;
	    font-size: 1.8rem;
	    width: 100%;
	    overflow: hidden;
	    display: none;
		
		@include breakpoint($md) {
			background: none;
			width: auto;
			padding: 2rem 0 0;
			overflow: visible;
			float: right;
			display: block !important;
		}
		
		ul {
			border-top: 1px solid $grey;
			margin: 0;
			padding: 0;
			
			@include breakpoint($md) {
				border: 0;
				display: inline-block;
			}
			
			li {
				@include breakpoint($md) {
					display: inline-block;
					float: left;
				}
			}
			
			a {
				border-bottom: 1px solid $grey;
				color: $white;
				text-decoration: none;
				padding: 1rem;
				display: block;
				
				@include breakpoint($md) {
					border: 0;
				}
			}
		}
	}
}
```

JS
```html
function navMenu(){
	var menu = $('#menu'),
	nav_btn = $('#nav_btn');

	nav_btn.click(function() {
		nav_btn.toggleClass('active');
		nav_btn.find('#nav_icon').toggleClass('open');
		menu.slideToggle('fast');
		return false;
	});
}
$(document).ready(function(){
	navMenu();
});
```