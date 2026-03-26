begin;

create or replace function evsec_one.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into evsec_one.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', '')
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_evsec_one on auth.users;

create trigger on_auth_user_created_evsec_one
after insert on auth.users
for each row
execute function evsec_one.handle_new_user();

commit;
