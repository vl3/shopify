var store = [{
        "title": "Intro to Ruby Pattern Matching",
        "excerpt":"Pattern matching is a feature first introduced in Ruby 2.7 that since Ruby 3 it’s no longer experimental.Pattern matching allows you to match a value against a pattern or structure (could be primitives, a Ruby object or a Struct) and binding those matched values to local variables. In other words,...","categories": ["ruby","pattern-matching"],
        "tags": [],
        "url": "http://localhost:4000/ruby/pattern-matching/intro-to-ruby-pattern-matching/"
      },{
        "title": "Immutable Objects",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/immutable-objects/"
      },{
        "title": "The Query Object Pattern",
        "excerpt":"Suppose that we have the following code: class Order has_many :shipments has_many :inventory_units, through: :shipmentsendclass Shipment belongs_to :order has_many :inventory_unitsendclass InventoryUnit belongs_to :shipmentendclass ComplianceValidator def initialize(order) @order = order end def call monthly_items_count = Order .joins(:inventory_units) .completed .where(email: @order.email) .where(created_at: Date.today.all_month) .count(:inventory_units) yearly_items_count = Order .joins(:inventory_units) .completed .where(email: @order.email) .where(created_at:...","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/the-query-object-pattern/"
      }]
