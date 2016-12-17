module Jekyll

  class ComparisonPage < Page
    def initialize(site, product)
      @site = site
      @base = site.source
      @dir = "comparisons"
      @name = product['name'] + ".html"

      self.read_yaml(File.join(@base, '_layouts'), 'compare.md')
      self.data['product'] = product
      self.data['title'] = product['name']
      self.process(@name)
    end
  end

  class ComparisonPageGenerator < Generator
    safe true

    def generate(site)
      site.data['comparisons'].each do |product|
        site.pages << ComparisonPage.new(site, product)
      end
    end
  end

end