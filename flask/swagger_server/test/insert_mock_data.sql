insert into tag values (1, 'name', 'COS 140 001'), (2, 'description', 'Description'), (3, 'welcometext', 'Welcome text'), (4, 'endtext', 'End text'), (5, 'email_invite', 'Survey URL: {SURVEYURL}<br/>Token: {TOKEN}'), (6, 'email_remind', 'Email remind text'), (7, 'email_register', 'Email register text'), (8, 'email_confirm', 'Email confirm text');
insert into instructor values (1, 'Roy Turner', 'roy.turner@maine.edu');
insert into survey values (1, 'example.com', 1);
insert into participant values (1, 'Example Person', 'jovon.craig@maine.edu'), (2, 'Example2 Person', 'teachingevaluationstest@gmail.com');
insert into survey_to_participant values (1, 1), (1, 2);
insert into survey_to_tag values (1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (1, 8);
insert into question values (1, 'Help text', 1, 'The Instructor', '5', 'Question?'), (2, 'Help text', 1, 'The Instructor', '5', 'Question 2?'), (3, 'Help text', 0, 'The Instructor', 'Y', 'Question 3?');
insert into survey_to_question values (1, 1), (1, 2), (1, 3);
insert into response values (1, '5', 1, 1);
