import csv
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords

stopWords = set(stopwords.words('english'))
punctuation = [',', '.', 'c.']
months = ['January', 'February', 'March','April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
# open the file in universal line ending mode
with open ('name-itemTitle.csv', 'rU') as csvfile:
	#read file as dictionary
	reader = csv.DictReader(csvfile)
	images = []
	titles = []
	image_tags = []
	#save image names and titles into 2 list
	for row in reader:
		images.append(row['FileName'])
		titles.append(row['ItemTitle'])
	
	#tokenize meaningful words in title
	for title in titles:
		tags = word_tokenize(title)
		tagsFiltered = []
		for tag in tags:
			#exclude stopwords and punctuation
			if tag not in stopWords and tag not in punctuation:
				#remove month and dates (too detail, don't really need it)
				if len(tagsFiltered) > 0 and tagsFiltered[-1] in months:
					tagsFiltered.pop()
				else:
					tagsFiltered.append(tag)
				#tagsFiltered.append(tag)
		image_tags.append(tagsFiltered)	

data = {}
print (titles)
print (image_tags)
counter = 0
for image in images:
	data[image] = image_tags[counter]
	counter = counter + 1

print(data)