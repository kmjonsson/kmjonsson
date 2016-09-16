
module Jekyll
  module SubMenyFilter
    def subpage(file,dir)
      if (file.end_with?("/") and file.gsub(/[^\/]+\/$/,'') == dir) or (!file.end_with?("/") and file.gsub(/[^\/]+$/,'') == dir)
	"yes"
      else
        "no"
      end
    end

    def subpageX(file,dir)
      if file.start_with?(dir) and file != dir
	"yes"
      else
        "no"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::SubMenyFilter)
