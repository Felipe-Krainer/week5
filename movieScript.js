let movie = {
    title: "Gone With The Wind",
    year: 1939,
    actressLead: "Vivien Leigh",
    actorLead: "Clark Gable",
    genre: "Epic",
    academyAwards: 8,
    quote: "Frankly My Dear, I don't give a damn",
    profits: {
        yearOfRelease: 10,
        subsequentToDate: 40
    },
    
    // Method with parameter
    leadingRole: function(actor) {
        return this[actor] || "undefined"; // Return 'undefined' if actor is not found
    },
    
    // Method without parameter
    formatInfo: function() {
        return `${this.title} was released in ${this.year}. It tells the story of the civil war in the US.`;
    }
};

//Logging the whole object
console.log(movie);

//Accessing individual values
console.log("Most famous quote from the movie: " + movie.quote);

let role = movie.leadingRole("actorLead");
console.log(role);
console.log("Leading role: " + movie.leadingRole("actressLead"));

let roleWithMostVotes = "actorLead";
console.log("Role with most votes is " + movie.leadingRole(roleWithMostVotes));

//Accessing profits.yearOfRelease
console.log("Profits in the year of release: " + movie.profits.yearOfRelease);
