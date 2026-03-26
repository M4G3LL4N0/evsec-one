begin;

create schema if not exists evsec_one;

grant usage on schema evsec_one to anon, authenticated, service_role;

create extension if not exists pgcrypto;

create table if not exists evsec_one.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists evsec_one.scans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references evsec_one.profiles(id) on delete cascade,
  score integer not null check (score >= 0 and score <= 100),
  risk_level text not null,
  created_at timestamptz not null default now()
);

create table if not exists evsec_one.exposures (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references evsec_one.profiles(id) on delete cascade,
  type text not null,
  source text,
  severity text not null,
  status text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists evsec_one.broker_removals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references evsec_one.profiles(id) on delete cascade,
  broker_name text not null,
  status text not null,
  submitted_at timestamptz,
  updated_at timestamptz not null default now()
);

create table if not exists evsec_one.alerts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references evsec_one.profiles(id) on delete cascade,
  title text not null,
  description text,
  severity text not null,
  source text,
  created_at timestamptz not null default now()
);

create table if not exists evsec_one.action_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references evsec_one.profiles(id) on delete cascade,
  title text not null,
  description text,
  priority text not null,
  status text not null default 'open',
  created_at timestamptz not null default now()
);

create index if not exists evsec_one_profiles_email_idx
  on evsec_one.profiles (email);

create index if not exists evsec_one_scans_user_id_created_at_idx
  on evsec_one.scans (user_id, created_at desc);

create index if not exists evsec_one_exposures_user_id_created_at_idx
  on evsec_one.exposures (user_id, created_at desc);

create index if not exists evsec_one_exposures_user_id_severity_idx
  on evsec_one.exposures (user_id, severity);

create index if not exists evsec_one_broker_removals_user_id_updated_at_idx
  on evsec_one.broker_removals (user_id, updated_at desc);

create index if not exists evsec_one_alerts_user_id_created_at_idx
  on evsec_one.alerts (user_id, created_at desc);

create index if not exists evsec_one_action_items_user_id_status_idx
  on evsec_one.action_items (user_id, status);

create or replace function evsec_one.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists evsec_one_set_profiles_updated_at on evsec_one.profiles;
create trigger evsec_one_set_profiles_updated_at
before update on evsec_one.profiles
for each row
execute function evsec_one.set_updated_at();

drop trigger if exists evsec_one_set_broker_removals_updated_at on evsec_one.broker_removals;
create trigger evsec_one_set_broker_removals_updated_at
before update on evsec_one.broker_removals
for each row
execute function evsec_one.set_updated_at();

alter table evsec_one.profiles enable row level security;
alter table evsec_one.scans enable row level security;
alter table evsec_one.exposures enable row level security;
alter table evsec_one.broker_removals enable row level security;
alter table evsec_one.alerts enable row level security;
alter table evsec_one.action_items enable row level security;

drop policy if exists "profiles_select_own" on evsec_one.profiles;
create policy "profiles_select_own"
on evsec_one.profiles
for select
to authenticated
using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on evsec_one.profiles;
create policy "profiles_insert_own"
on evsec_one.profiles
for insert
to authenticated
with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on evsec_one.profiles;
create policy "profiles_update_own"
on evsec_one.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "profiles_delete_own" on evsec_one.profiles;
create policy "profiles_delete_own"
on evsec_one.profiles
for delete
to authenticated
using (auth.uid() = id);

drop policy if exists "scans_select_own" on evsec_one.scans;
create policy "scans_select_own"
on evsec_one.scans
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "scans_insert_own" on evsec_one.scans;
create policy "scans_insert_own"
on evsec_one.scans
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "scans_update_own" on evsec_one.scans;
create policy "scans_update_own"
on evsec_one.scans
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "scans_delete_own" on evsec_one.scans;
create policy "scans_delete_own"
on evsec_one.scans
for delete
to authenticated
using (auth.uid() = user_id);

drop policy if exists "exposures_select_own" on evsec_one.exposures;
create policy "exposures_select_own"
on evsec_one.exposures
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "exposures_insert_own" on evsec_one.exposures;
create policy "exposures_insert_own"
on evsec_one.exposures
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "exposures_update_own" on evsec_one.exposures;
create policy "exposures_update_own"
on evsec_one.exposures
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "exposures_delete_own" on evsec_one.exposures;
create policy "exposures_delete_own"
on evsec_one.exposures
for delete
to authenticated
using (auth.uid() = user_id);

drop policy if exists "broker_removals_select_own" on evsec_one.broker_removals;
create policy "broker_removals_select_own"
on evsec_one.broker_removals
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "broker_removals_insert_own" on evsec_one.broker_removals;
create policy "broker_removals_insert_own"
on evsec_one.broker_removals
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "broker_removals_update_own" on evsec_one.broker_removals;
create policy "broker_removals_update_own"
on evsec_one.broker_removals
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "broker_removals_delete_own" on evsec_one.broker_removals;
create policy "broker_removals_delete_own"
on evsec_one.broker_removals
for delete
to authenticated
using (auth.uid() = user_id);

drop policy if exists "alerts_select_own" on evsec_one.alerts;
create policy "alerts_select_own"
on evsec_one.alerts
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "alerts_insert_own" on evsec_one.alerts;
create policy "alerts_insert_own"
on evsec_one.alerts
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "alerts_update_own" on evsec_one.alerts;
create policy "alerts_update_own"
on evsec_one.alerts
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "alerts_delete_own" on evsec_one.alerts;
create policy "alerts_delete_own"
on evsec_one.alerts
for delete
to authenticated
using (auth.uid() = user_id);

drop policy if exists "action_items_select_own" on evsec_one.action_items;
create policy "action_items_select_own"
on evsec_one.action_items
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "action_items_insert_own" on evsec_one.action_items;
create policy "action_items_insert_own"
on evsec_one.action_items
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "action_items_update_own" on evsec_one.action_items;
create policy "action_items_update_own"
on evsec_one.action_items
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "action_items_delete_own" on evsec_one.action_items;
create policy "action_items_delete_own"
on evsec_one.action_items
for delete
to authenticated
using (auth.uid() = user_id);

commit;
