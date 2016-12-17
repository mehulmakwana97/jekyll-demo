module Jekyll
    class SmenuUrlFilter < Liquid::Tag
        def initialize(tag_name, input, tokens)
            super
            @options = {}
            @input = input
        end
        def render(context)
            site = context.registers[:site].config
            content = Liquid::Template.parse(@input).render(context)
            content.scan(Liquid::TagAttributes) do |key, value|
                # Strip quotes from around attribute values
                @options[key] = value.gsub(/^['"]|['"]$/, '')
            end

            url_parts = @options['page_url'].split('/')
            rpage_url = '/' + url_parts[1].to_s + '/'.gsub(/\/\//, '/')
            mpage_url = @options['page_url'].to_s + '/'.gsub(/\/\//, '/')
            active = false
            if @options['menu_url'].to_s == mpage_url or @options['menu_url'].to_s == rpage_url then
                active = true
            end

            context.environments.first["page"]['menu_check'] = active;

            return nil
        end
    end
end

Liquid::Template.register_tag('menu_check', Jekyll::SmenuUrlFilter)
