insert into tag values (1, 'course', 'COS 140');
insert into instructor values (2, 'Roy Turner', 'turnertoken');
insert into survey values (3, 'example.com', 2);
insert into `e-mail` values (4, 'example@gmail.com', 3);
insert into survey_to_tag values (3, 1);
insert into question values (5, 'Help text', 1, 'Group', '1 to 5', 'Question?');
insert into survey_to_question values (3, 5);
insert into response values (6, '5', 3, 5);
