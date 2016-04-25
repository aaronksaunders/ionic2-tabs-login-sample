# ionic2-tabs-login-sample

Sample application to show a login flow for a tab based application in Ionic2.

What we are trying to accomplish is to show the login page when the application first launches and then when user is authenticated, transition to the tabs page.

The initial issue I encountered was that I was attempting to set the nav.root to the tabsPage when logging in and then setting is back to the loginPage when logging out. What I discovered is that the tabsPage is a container for holding the tabs and each of the tabs have there own navigation controller. This lead me down the path that finally worked where I get the rootNav of the tab I am on and then set that back to the login page

on login

```javascript
this.nav.setRoot(TabsPage,{})
```

on logout

```javascript
// what we are doing here is setting the nav that is holding the tabPages back to
// the login page... the current _nav is a child nav
this._nav.rootNav.setRoot(ModalPage)
```
