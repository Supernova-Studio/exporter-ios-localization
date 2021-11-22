<img src="./readme-icon.png" alt="Supernova Logo" style="max-width:100%;">


[Supernova](https://supernova.io) is a design system platform that manages your assets, tokens, components and allows you to write spectacular documentations for your entire teams. And because you found your way here, you are probably interested in its most advanced functionality - automatic hand-off of design and development assets, tokens and data in general. To learn everything Supernova, please check out our [developer documentation](https://developers.supernova.io/).

# iOS Localization Exporter


The iOS Localization Exporter allows you to **produce production-ready localization files for texts/label defined inside your design system**. This way, you can define your localization strings in design time, and have them immediately available in code.

You can generate all production ready-code either manually using Supernova's [VS Code extension](https://marketplace.visualstudio.com/items?itemName=SupernovaIO.pulsar-vsc-extension), or automate your code delivery pipeline using Supernova [Design Continuous Delivery](https://supernova.io/automated-code-delivery).


## Example Usage

Once you have run the exporter against your design system, you can start using the code in your codebase right away. The exporter produces one file, `Localization.strings`, that you can point towards any folder you want. The exporter produces localization strings that follow your structure of the token groups:

```

/* Welcome Screen */

/* Use this everywhere user creates a new account */
"welcomeScreen.signIn" = "Please Sign In";

/* No description */
"welcomeScreen.signOut" = "Sign Out from the application";

/* No description */
"welcomeScreen.forgotPassword" = "Did you forget your password?";

```

You can use the localization key to access its content using `NSLocalizedString` macro, using both Swift and ObjC:

```
NSLocalizedString("welcomeScreen.signIn", comment: "") // Please Sign In
```


## Installing

In order to make the Supernova localization exporter available for your organization so you can start generating code from your design system, please follow the installation guide in our [developer documentation](https://developers.supernova.io/using-exporters/installing-exporters).


## Reporting Bugs or Requesting Features

In order to faciliate easy communication and speed up delivery of fixes and features for this exporter, we require everyone to log all issues and feature requests through the issue tracking of this repository. 

Please read through the [existing issues](../../issues) before you open a new issue! It might be that we have already discussed it before. If you are sure your request wasn't mentioned just yet, proceed to [open a new issue](../../issues) and fill in the required information. Thank you!


## Contributing

If you have an idea for improving this exporter package or want a specific issue fixed quickly, we would love to see you contribute to its development!  

There are multiple ways you can contribute, so we have written a [contribution guide](https://developers.supernova.io/building-exporters/contribution-and-requests) that will walk your through the process. Any pull requests to this repository are very welcome. 

Would love to help us build more but maybe need a little bit of support? [Join our community](https://community.supernova.io) and drop us a message, we will support any of your wild ideas!


## License

This exporter is distributed under the [MIT license](./LICENSE.md). [We absolutely encourage you](https://developers.supernova.io/building-exporters/cloning-exporters) to clone it and modify it for your purposes, so it fits the requirements of your stack. If you see that you have created something amazing in the process that others would benefit from, we strongly recommend you consider [publishing it back to the community](https://developers.supernova.io/building-exporters/sharing-exporters-with-others) as well.


## Useful Links

- To learn more about Supernova, [go visit our website](https://supernova.io)
- To join our community of fellow developers where we try to push what is possible with design systems and code automation, join our [community discord](https://community.supernova.io)
- To understand everything you can do with Supernova and how much time and resources it can save you, go read our [product documentation](https://learn.supernova.io/)
- Finally, to learn everything about what exporters are and how you can integrate with your codebase, go read our [developer documentation](https://developers.supernova.io/)


## Supernova Maintained Exporters

We are developing and maintaining exporters for many major technologies. Here are all the official exporters maintained by Supernova:

- [iOS Token & Style Exporter](https://github.com/Supernova-Studio/exporter-ios)
- [iOS Localization Exporter](https://github.com/Supernova-Studio/exporter-ios-localization)
- [Android Token & Style Exporter](https://github.com/Supernova-Studio/exporter-android)
- [React Token & Style Exporter](https://github.com/Supernova-Studio/exporter-react)
- [Flutter Token & Style Exporter](https://github.com/Supernova-Studio/exporter-flutter)
- [Angular Token & Style Exporter](https://github.com/Supernova-Studio/exporter-angular)
- [Typescript Token & Style Exporter](https://github.com/Supernova-Studio/exporter-typescript)
- [CSS Token & Style Exporter](https://github.com/Supernova-Studio/exporter-css)
- [LESS Token & Style Exporter](https://github.com/Supernova-Studio/exporter-less)
- [SCSS Token & Style Exporter](https://github.com/Supernova-Studio/exporter-scss)
- [Style Dictionary Exporter](https://github.com/Supernova-Studio/exporter-style-dictionary)

Additionally, you can also use asset exporters for all major targets, enjoy!:

- [SVG Asset Exporter](https://github.com/Supernova-Studio/exporter-svg-assets)
- [PDF Asset Exporter](https://github.com/Supernova-Studio/exporter-pdf-assets)
- [PNG Asset Exporter](https://github.com/Supernova-Studio/exporter-png-assets)
- [iOS Asset Catalogue Exporter](https://github.com/Supernova-Studio/exporter-ios-asset-catalogue)
- [React Native Asset Exporter](https://github.com/Supernova-Studio/exporter-react-native-assets)
- [Android Asset Exporter](https://github.com/Supernova-Studio/exporter-android-assets)
- [Flutter PNG Asset Exporter](https://github.com/Supernova-Studio/exporter-flutter-png-assets)
- [Flutter SVG Asset Exporter](https://github.com/Supernova-Studio/exporter-flutter-svg-assets)

To browse all exporters created by our amazing community, please visit the [Supernova](https://supernova.io) Exporter Store. 