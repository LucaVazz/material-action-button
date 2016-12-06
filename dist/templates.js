angular.module("$actionButton").run(["$templateCache", function($templateCache) {$templateCache.put("template.html","\r\n<div ng-animate-children=\"true\">\r\n	<div class=\"action-button-small-container\" ng-click=\"$ctrl.closeMenu({type: \'main\', backgroundClick: true})\">\r\n		<div class=\"action-button-small-container--individual\" ng-repeat=\"button in $ctrl.options.buttons\" ng-click=\"$ctrl.buttonClicked({type: \'secondary\', index: $index})\">\r\n			<span class=\"action-button-small--label\" ng-if=\"button.label\">{{button.label}}</span>\r\n			<button class=\"action-button-small\" ng-style=\"{\'backgroundColor\': button.backgroundColor, \'color\': button.iconColor}\">\r\n				<i class=\"action-button-small--icon icon\" ng-class=\"button.icon\"><span class=\"action-button-small--icon__label\" ng-if=\"!button.icon\">{{button.letter || button.label[0]}}</span></i>\r\n			</button>\r\n		</div>\r\n	</div>\r\n	<button class=\"action-button\" ng-click=\"$ctrl.buttonClicked({type: \'main\'})\" ng-style=\"{\'backgroundColor\': $ctrl.options.mainAction.backgroundColor}\">\r\n		<i class=\'action-button--icon icon action-button--icon__main\' ng-class=\"$ctrl.options.mainAction.icon\" ng-style=\"{\'color\': $ctrl.options.mainAction.textColor}\"></i>\r\n		<i class=\'action-button--icon action-button-icon__close ion-android-close\' ng-style=\"{\'color\': $ctrl.options.mainAction.textColor}\"></i>\r\n	</button>\r\n</div>\r\n");}]);