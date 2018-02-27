import csv
from py2neo import Graph, Relationship, Node
f = open('fakedata.csv', 'rb')
reader = csv.reader(f)

rownum = 0
colnum = 0
data = {}
for r in reader:
    length = len(r)
    tags = []
    for c in r:
        if colnum == 0: #first item in row; url
            url = c
        else: #a tag; push it onto list
            tags.append(c)
        if colnum == length - 1: #reached end of row; map url to list
            data[url] = tags
        #print rownum, colnum, c
        colnum += 1
    rownum += 1
    colnum = 0

for url, tags in data.iteritems():
    print url, tags

#now data looks like this
#{
#   url1:list_of_tags
#   url2:list_of_tags
#   url3:list_of_tags
#}
# Now we can push this into neo4j

# Create all nodes
graph = Graph()
graph.delete_all()
nodes = []
for url in data:
    node = Node("Image", url=url)
    nodes.append(node)

for node in nodes:
    graph.merge(node)


# Create all edges
rownum = 0
for url, tags in data.iteritems():
    for tag in tags:
        #got tag, iterate through rest of dictionary to identify relationships
        rownum2 = 0
        for url2, tags2 in data.iteritems():
            if rownum >= rownum2: #so that we dont double count edges
                rownum2 += 1
                continue
            for tag2 in tags2: #search for tag matches
                if tag2 == tag and tag != '': #found a match
                    print 'found a match!', tag
                    rel = Relationship(nodes[rownum], tag, nodes[rownum2])
                    graph.create(rel)
            rownum2 += 1
    rownum += 1
