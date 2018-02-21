from flask import Flask, render_template, request
app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    url = "https://www.morleybuilders.com/wp-content/uploads/revslider/UCLA%20Powell%20Library/POW_Ext.jpg"
    return render_template("index.html", url=url)


@app.route('/about/<something>')
def about(something):
        return 'This page is about {0}'.format(something)


if __name__ == "__main__":
    app.run()

#images
#powell: https://www.morleybuilders.com/wp-content/uploads/revslider/UCLA%20Powell%20Library/POW_Ext.jpg
#royce: https://upload.wikimedia.org/wikipedia/commons/0/02/Royce_Hall_edit.jpg
#yrl: https://upload.wikimedia.org/wikipedia/en/5/58/Charles_E._Young_Research_Library%2C_UCLA.jpg