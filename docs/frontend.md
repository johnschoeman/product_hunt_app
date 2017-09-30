# Frontend Technologies

Product Hunt App is a single page application and uses the React.js framework and uses Redux to implement a Flux architecture.

Node package manager (npm) is used to maintain frontend dependencies and webpack is used bundle assets for deployment

### Frontend Dependencies

* React Dom
* React Router 4
* React Redux
* Bable
* React Modal
* Redux Thunk

## Feature Highlights

###Commenting

Top level and reply level comments are supported and are displayed immediately using a normalized state managed by redux.

![commenting](https://github.com/johnschoeman/product_hunt_app/blob/master/docs/img/production_readme/commenting.gif)

###Upvoteing

An upvoting system is implemented for both products and comments using a single polymorphic model construct.  Total upvote counts are shown for both products and comments.  Users are able to create and destroy upvotes and they immediately displayed.

![upvoting](https://github.com/johnschoeman/product_hunt_app/blob/master/docs/img/production_readme/upvoting.gif)

###Responsive TextArea

Textareas were made to automatically resize themselves in response to user input using javascript and React.js.

![responsive textarea](https://github.com/johnschoeman/product_hunt_app/blob/master/docs/img/production_readme/responsive-textarea.gif)