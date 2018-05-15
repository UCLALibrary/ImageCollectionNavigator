#!/usr/bin/env python3
import subprocess
import glob
#import classify_image

result_file = open('image_result.txt', 'w+')
result_file.close()

images = glob.glob('/Users/yunxu/Desktop/ICN/*')

for image in images:
	result_file = open('image_result.txt', 'a')
	result_file.write(image[25:]+'\n')
	out = subprocess.check_output(['python3','classify_image.py', '--image_file', image], universal_newlines=True)
	result_file.write(out)
	result_file.write("\n")
	result_file.close()
