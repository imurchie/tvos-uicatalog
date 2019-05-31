/*
See LICENSE.txt for this sample’s licensing information.

Abstract:
The application delegate class that starts TVML.
*/

import UIKit
import TVMLKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, TVApplicationControllerDelegate {
    // MARK: Properties
    
    var window: UIWindow?
    
    var appController: TVApplicationController?

    /// - Tag: tvBaseURL
    static let tvBaseURL = "http://127.0.0.1:9001/"
    
    static let tvBootURL = "\(AppDelegate.tvBaseURL)js/application.js"

    // MARK: UIApplication Overrides

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey : Any]? = [:]) -> Bool {
        // Override point for customization after application launch.
        window = UIWindow(frame: UIScreen.main.bounds)
        
        /*
            Create the TVApplicationControllerContext for this application
            and set the properties that will be passed to the `App.onLaunch` function
            in JavaScript.
        */
        let appControllerContext = TVApplicationControllerContext()
        
        /*
            The JavaScript URL is used to create the JavaScript context for your
            TVMLKit application. Although it is possible to separate your JavaScript
            into separate files, to help reduce the launch time of your application
            we recommend creating minified and compressed version of this resource.
            This will allow for the resource to be retrieved and UI presented to
            the user quickly.
        */
        if let javaScriptURL = URL(string: AppDelegate.tvBootURL) {
            appControllerContext.javaScriptApplicationURL = javaScriptURL
        }
        
        appControllerContext.launchOptions = ["baseURL": AppDelegate.tvBaseURL]

        for (key, value) in launchOptions ?? [:] {
            appControllerContext.launchOptions[key.rawValue] = value
        }

        appController = TVApplicationController(context: appControllerContext, window: window, delegate: self)
        
        return true
    }
    
    // MARK: TVApplicationControllerDelegate
    
    func appController(_ appController: TVApplicationController, didFail error: Error) {
        print("\(#function) invoked with error: \(error)")
        
        let title = "Error Launching Application"
        let message = error.localizedDescription
        let alertController = UIAlertController(title: title, message: message, preferredStyle: .alert)
        
        self.appController?.navigationController.present(alertController, animated: true, completion: nil)
    }

}
