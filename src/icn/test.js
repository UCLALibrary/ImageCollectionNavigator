fetch('/users', { 
        method: 'POST',
        data: {
          name: self.refs.name,
          job: self.refs.job
        }
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });