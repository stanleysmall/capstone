insert into tag values (1, 'name', 'COS 140 001'), (2, 'description', 'Description'), (3, 'welcometext', 'Welcome text'), (4, 'endtext', 'End text'), (5, 'email_invite', 'Dear {FIRSTNAME},<br/><br/>you have been invited to participate in a survey.<br/><br/>Click here to do the survey:<br/>{SURVEYURL}<br/><br/>Please enter the token {TOKEN} to access the survey.'), (6, 'email_remind', 'Email remind text'), (7, 'email_register', 'Email register text'), (8, 'email_confirm', 'Email confirm text');
insert into instructor values (1, 'Roy Turner', 'roy.turner@maine.edu'), (2, 'Torsten Hahmann', 'torsten.hahmann@maine.edu');
insert into survey values (1, 'example.com', 1), (2, 'example.com', 2);
insert into participant values (1, 'Example Person', 'jovon.craig@maine.edu'), (2, 'Example2 Person', 'teachingevaluationstest@gmail.com'), (3, 'Tom Guo', 'tg@gmail.com');
insert into survey_to_participant values (1, 1), (1, 2), (2, 3);
insert into tag values (9, 'name', 'COS 250 001'), (10, 'description', 'De'), (11, 'email_invite', 'Ei text'), (12, 'email_remind', 'Eremind text'), (13, 'email_register', 'Er text'), (14, 'email_confirm', 'Ec text');
insert into survey_to_tag values (1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (1, 8), (2, 9), (2, 10), (2, 11), (2, 12), (2, 13), (2, 14), (2, 3), (2, 4);
insert into question values (1, 'Help text', 1, 'The Instructor', '5', 'Question?'), (2, 'Help text', 1, 'The Instructor', '5', 'Question 2?'), (3, 'Help text', 0, 'The Instructor', 'Y', 'Question 3?'), (4, 'Help text', 0, 'The Instructor', 'L', 'Question 2?');
insert into survey_to_question values (1, 1), (1, 2), (1, 3), (2, 1), (2, 4);
insert into response values (1, '5', 1, 1);
