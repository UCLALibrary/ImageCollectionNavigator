from .models import get_images, get_tags
from flask import Flask, render_template, request
app = Flask(__name__)

# hardcode the first image url to be displayed to global
orig_url = "http://cdn1-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/pupporch-9.jpg"


@app.route("/", methods=["GET", "POST"])
def index():
    return render_template("index.html", url=orig_url)


# need to figure out how to send form that fits this function in index.html
@app.route('/add_images', methods=["POST"])
def add_images():
    tag = request.form['tag']
    url = request.form['url']
    print tag
    # urls is a set
    urls = get_images(tag, url)
    # all_tags is a list of lists
    all_tags = []
    for u in urls:
        tags = get_tags(u)
        all_tags.append(tags)
    return render_template("index.html", url=orig_url, urls_tags=zip(urls, all_tags))


@app.route('/about/<something>')
def about(something):
        return 'This page is about {0}'.format(something)


if __name__ == "__main__":
    app.run()
