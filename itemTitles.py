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
	#data = {}
	for row in reader:
		images.append(row['FileName'])
		titles.append(row['ItemTitle'])
		#data[row['FileName']] = row['ItemTitle']
	for title in titles:
		tags = word_tokenize(title)
		tagsFiltered = []
		for tag in tags:
			if tag not in stopWords and tag not in punctuation:
				'''if tagsFiltered[-1] in months:
					tagsFiltered.pop()
				else:
					tagsFiltered.append(tag)'''
				tagsFiltered.append(tag)
		image_tags.append(tagsFiltered)	

data = {}
print (titles)
print (image_tags)
counter = 0
for image in images:
	data[image] = image_tags[counter]
	counter = counter + 1

print(data)