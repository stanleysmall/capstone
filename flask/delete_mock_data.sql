delete from response;
delete from survey_to_question;
delete from question;
delete from survey_to_tag;
delete from `survey_to_e-mail`;
delete from `e-mail`;
delete from survey;
delete from instructor;
delete from tag;

alter table question auto_increment=1;
alter table `e-mail` auto_increment=1;
alter table survey auto_increment=1;
alter table instructor auto_increment=1;
