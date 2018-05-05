from py2neo import Graph, Node, Relationship

#orig_url = "http://cdn1-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/pupporch-9.jpg"
orig_url = "static/images/uclalsc_uars100_850_009a.jpg"

class Image:
    def __init__(self, url, tag):
        self.url = url
        self.tag = tag


#   running list of urls to display
#   using a set instead of a list for unique values only
urls = set()


#   returns list of urls of images with the same tag as specified image
def get_images(tag, url):
    graph = Graph()
#   cypher does not allow parameters for relationship types, so must concatenate manually
    query_1 = "MATCH (i1:Image)-[t:"
    query_2 = """
    ]-(i2:Image)
        WHERE i1.url={url}
        RETURN i2.url AS returned_url
    """
    query = query_1 + tag + query_2
    imgs = graph.run(query, url=url)
    while imgs.forward():
        if imgs.current()['returned_url'] != orig_url:
            urls.add(imgs.current()['returned_url'])
    return urls


# returns a list of unique tags associated with specified image
def get_tags(url):
    graph = Graph()
    query = """
        MATCH (i1:Image)-[t]-() 
        WHERE i1.url = {url}
        RETURN distinct type(t) AS tag
    """
    cypher_tags = graph.run(query, url=url)
    tags = []
    while cypher_tags.forward():
        tags.append(cypher_tags.current()['tag'])
    return tags