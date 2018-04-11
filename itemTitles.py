import csv
import string
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords

stopWords = set(stopwords.words('english'))
punctuation = ["''", "``", "|", "'s"]
prefixes = ["lot", "sheet", "c."]
months = ['January', 'February', 'March','April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

# open the file in universal line ending mode
with open ('name-itemTitle.csv', 'rU') as csvfile:
	# read file as dictionary
	reader = csv.DictReader(csvfile)
	images = []
	titles = []
	image_tags = []
	# save image names and titles into 2 list
	for row in reader:
		images.append(row['FileName'])
		titles.append(row['ItemTitle'])
	
	# tokenize meaningful words in title
	for title in titles:
		tags = word_tokenize(title)
		tagsFiltered = []
		for tag in tags:
			# exclude stopwords and punctuation
			if tag not in stopWords and tag not in punctuation and tag not in string.punctuation:
				# remove month and dates
				if len(tagsFiltered) > 0 and tagsFiltered[-1] in months:
					tagsFiltered.pop()
				# put year and c. together as one tag
				# Sheet and Lot numbers are also treated as one tag
				elif len(tagsFiltered) > 0 and tagsFiltered[-1].lower() in prefixes and tag.isdigit():
					if len(tag) != 4 or tagsFiltered[-1] == "c.":
						tagsFiltered[-1] = tagsFiltered[-1]+" "+ tag
					else: 
						tagsFiltered.append(tag)
				else:
					tagsFiltered.append(tag)
				#tagsFiltered.append(tag)
		image_tags.append(tagsFiltered)	

# map tags to corresponding images
data = {}
counter = 0
for image in images:
	data[image] = image_tags[counter]
	counter = counter + 1

# result in csv file
result_file = open('metadata_tags.csv', 'w')
for k, v in data.items():
	result_file.write(k+",")
	for tag in v:
		result_file.write(tag+",")
	result_file.write("\n")
result_file.close()

# result in txt file
res_file = open('metadata_tags.txt', 'w')
for k, v in data.items():
	res_file.write(k+"\n")
	for tag in v:
		res_file.write(tag+",")
	res_file.write("\n\n")
res_file.close()

#print(data)