import sys
from collections import defaultdict

infile = open(sys.argv[1])

# a dictionary mapping img url to list of tags
map = defaultdict(list)
#track which image im currently on
cur_img = None
#track list of tags for current image
cur_tags = []


infile.seek(0)
for line in infile:
	if line != "\n": #skip empty lines
		imgs_and_tags = line.split('(', 1)[0]
		if imgs_and_tags[len(imgs_and_tags) - 1] == ' ':
			imgs_and_tags = imgs_and_tags[:-1]
			#print imgs_and_tags
	
		#check if it's an image name
		if line[-4:] == "jpg\n":
			if cur_img != None: 
				map[cur_img] = cur_tags #push previous into map
				cur_tags = [] #clear cur_tags for next iteration
			cur_img = line[:-1] #update cur_img
		#otherwise its a list of tags
		else:
			tags = imgs_and_tags.split(', ')
			for tag in tags:
				cur_tags.append(tag) #push tags onto cur_tags

#now at the end of the loop, probably bc my algorithm sucks, we still
#have to push the final value of cur_img and cur_tags onto map bc 
#otherwise we miss the last block of the txt file
map[cur_img] = cur_tags

#CHECK CONTENTS
#for i in map:
#	print i, map[i]

#now print to result.csv
filename = infile.name[:-4] + ".csv"
outfile = open(filename, "w+")

for img in map:
	line = img
	for tag in map[img]:
		line += ','
		line += tag
	line += "\n"
	outfile.write(line)

outfile.close()
infile.close()