insert into tag values (1, 'name', 'COS 140 001'),
    (2, 'description', 'Description'),
    (3, 'welcometext', 'Welcome text'),
    (4, 'endtext', 'End text'),
    (5, 'email_invite', 'Email invite text'),
    (6, 'email_remind', 'Email remind text'),
    (7, 'email_register', 'Email register text'),
    (8, 'email_confirm', 'Email confirm text');
insert into instructor values (1, 'Roy Turner', 'turnertoken');
insert into survey values (1, 'example.com', 1);
insert into `e-mail` values (1, 'example@gmail.com');
insert into `survey_to_e-mail` values (1, 1);
insert into survey_to_tag values (1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (1, 8);
insert into question values (1, 'Help text', 1, 'The Instructor', '5', 'Question?');
insert into question values (2, 'Help text', 0, 'The Instructor', 'L', 'Question 2?');
insert into survey_to_question values (1, 1), (1, 2);
insert into response values (1, '5', 1, 1);
