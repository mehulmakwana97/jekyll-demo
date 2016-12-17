module Jekyll

	module TOCGenerator

		def toc_generate(content)
			toc = {}
			config = @context.registers[:site].config
			# This is not being used yet
			toc_heading_level = config["toc_heading_level"] || 4

			content.gsub(/<h4.*?\/h4>/) { |heading|
				title = heading.match(/>(.*)</)[1]
				anchor = CGI.unescapeHTML(title).downcase.gsub(' ','-').gsub(/[^a-z0-9\-]+/, '')
				toc[anchor] = title
				"<h4 id='" + anchor + "'>" + title + "</h4>"
			}

			@context.environments.first["page"]["toc"] = toc

			return content
		end

	end

end

Liquid::Template.register_filter(Jekyll::TOCGenerator)