module Jekyll
	class BlockInclude < Liquid::Block
		def initialize(tag_name, input, tokens)
			super
			@options = {}
			input.scan(Liquid::TagAttributes) do |key, value|
				# Strip quotes from around attribute values
				@options[key] = value.gsub(/^['"]|['"]$/, '')
				if key == 'title' then
					@options['id'] = value.downcase.gsub(' ','-').gsub(/[^a-z0-9\-]/,"")
				end
			end
			@input = input
		end

		def load_template(filename, context)
			file = File.join(context.registers[:site].source, '_includes', filename)
			return File.read(file)
		end

		def render(context)
			converter = context.registers[:site].find_converter_instance(::Jekyll::Converters::Markdown)
			@options['content'] = converter.convert(super)
			template = load_template('block.html', context)
			return Liquid::Template.parse(template).render(@options)
		end
	end
end

Liquid::Template.register_tag('block', Jekyll::BlockInclude)