#!/usr/bin/env python3
import subprocess
import glob
#import classify_image

result_file = open('image_result.csv', 'w+')
result_file.close()

images = glob.glob('/Users/yunxu/Desktop/ICN/*')

for image in images:
	result_file = open('image_result.csv', 'a')
	result_file.write(image[25:]+',')
	out = subprocess.check_output(['python3','classify_image.py', '--image_file', image], universal_newlines=True)
	out = out.replace(',', '/')
	out = out.replace('(', ',')
	out = out.replace(')\n', ',')
	result_file.write(out)
	result_file.write("\n")
	result_file.close()
