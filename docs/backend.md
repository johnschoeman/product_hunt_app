# Backend Technologies

Proudct Hunt app was built with Ruby on Rails and is hosted by Heroku with DNS provided by Cloudflare.  Rails is used to provide a RESTful api to serve the application assets to the client.

## Feature Highlights

### Speed optimization of comment and upvote counts

A feature provided by Product Hunt app is a display of total comments and upvotes a product has.  A counter_cache was implemented to store the count of database entity association quantities:

```ruby
class Comment < ApplicationRecord
  validates :body, presence: true
  validate :parent_comment_is_top_level

  belongs_to :user

  belongs_to :product, counter_cache: true

  ...
```

This increases data upload time by a negliable amount and greatly increases speed of the application upload.