# Technical Test Fergus

## Getting Started
I time-boxed this challenge and allowed myself 2.5 hours to write the code and 0.5 hours to write the README. This means that I didn't finish the challenge as I ran out of time. But that's ok, I didn't want to give you a wrong impression of building a completed app but in reality it took me a day (or days).

I decided to build the front-end of the app as I enjoy it the most and would like to develop my skills. Furthermore I decided to use redux as I wanted to practice it some more. I made the following assumptions:

- database will be written on the server side using knex/mysql3 consisting of 2 tables, one for the job listings and one for the notes (one to many relationship).

- bold assumption that my code works :-) To be honest I've never had to build just the front-end without building the back-end at the same time. I don't know how to test my code without having the back-end ready. I need to do some research on how to do this. I believe there is a way to mock the data. I'm super curious now and will try to do it after submitting this challenge.

## Process
I decided on a MVP and came to the conclusion that, from a user's perspective, the most important feature would be to see a list with all the jobs and be able to click on a listing and see the details.
MVP would usually also include some basic styling but given the time limit I decided not to worry about css for now.

After I completed the MVP, I worked on the filter feature. If I were a tradie, I would want to filter the jobs by status. This feature took me quite a long time as it was complex and redux confused me with the state management :-)

I didn't have time to work on another feature unfortunately. Next I would have worked on the edit notes / change status features. I would have created an UpdateJobListing component and would have created a controlled form to update the notes and updating the status using radio buttons. And then write the actions and reducers of course.

I would have built the add notes feature last by creating an AddNote component. It will take me some time to figure out how to do this. So far I've only learned to add the whole item, not just one input field. But it will probably work the same way now that I'm thinking about it :-) I will give it a try later!

## Features
The feature of displaying all the job listing will get rendered in the Home component.

I've created a component called JobDetails that renders the individual job listing once clicked on it.

The FilterJobs component renders the filtering functionality.

## What's next
I will complete the challenge and build the remaining features and do the back-end as well because I really enjoy it and I'm super keen to see if my code works :-)

I want to write some tests because I really like testing and it's a very good practice for me.

Furthermore I want to apply some styling. I love doing css, it's just taking a loooong time. I'm thinking about using grid and want to make it responsive of course.

I'm going to research on how to test the front-end without having the back-end! I really want to know.

Lastly I want to redo the challenge using react only. I'm currently taking the "epic react" course and I would love to practice my react skills. Especially react hooks.

## Reflections
I had so much fun working on this challenge! Thanks so much for this opportunity!

It showed me how important it is to practice practice practice! I haven't used redux for a few weeks and it's shocking to see how quickly you forget!

Once again I realised the importance of self-compassion! I had to remind myself that it's ok not knowing everything. Redux is hard! And also accepting that I won't be able to finish the challenge in the given time frame. It's so easy to be hard on youself.

I would have loved to do this challenge in a pair. It would have been so much fun! I missed not being able to bounce my ideas off someone. I was very fixated on my solution. Would have been great to hear some other ideas on how to solve this.



