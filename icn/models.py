from py2neo import Graph, Node, Relationship

'''
def get_original_url():
    graph = Graph()
    request = "MATCH (i:Image) WHERE i.name = {name} RETURN i.url AS url"
    name = {"name": "Powell"}
    obj = graph.run(request, name)
    link = obj.evaluate()
    # nodes = []
    # for i, j in obj:
    #    nodes.append({"title": j, "label": "movie"})
    #    print "inside loop"
    url = "https://www.morleybuilders.com/wp-content/uploads/revslider/UCLA%20Powell%20Library/POW_Ext.jpg"
    return link
    # this isnt working, not retrieving data but when I run the query on the db directly I get the url.
'''

#class Image:
