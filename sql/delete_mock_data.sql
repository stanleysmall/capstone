delete from response;
delete from survey_to_question;
delete from question;
delete from survey_to_tag;
delete from survey_to_participant;
delete from participant;
delete from survey;
delete from instructor;
delete from tag;

alter table question auto_increment=1;
alter table participant auto_increment=1;
alter table survey auto_increment=1;
alter table instructor auto_increment=1;