export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type RiskLevel = "low" | "moderate" | "high" | "critical";
export type ExposureSeverity = "low" | "medium" | "high";
export type ExposureStatus = "open" | "reviewed" | "resolved";
export type RemovalStatus =
  | "ready"
  | "queued"
  | "processing"
  | "submitted"
  | "suppressed"
  | "completed";
export type ActionPriority = "low" | "medium" | "high";
export type ActionStatus = "open" | "in_progress" | "completed" | "dismissed";

export interface ProfileRow {
  id: string;
  email: string | null;
  full_name: string | null;
  created_at: string;
  updated_at: string;
}

export interface ScanRow {
  id: string;
  user_id: string;
  score: number;
  risk_level: string;
  created_at: string;
}

export interface ExposureRow {
  id: string;
  user_id: string;
  type: string;
  source: string | null;
  severity: ExposureSeverity;
  status: ExposureStatus;
  metadata: Record<string, Json>;
  created_at: string;
}

export interface BrokerRemovalRow {
  id: string;
  user_id: string;
  broker_name: string;
  status: RemovalStatus;
  submitted_at: string | null;
  updated_at: string;
}

export interface AlertRow {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  severity: ExposureSeverity;
  source: string | null;
  created_at: string;
}

export interface ActionItemRow {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  priority: ActionPriority;
  status: ActionStatus;
  created_at: string;
}

export interface EvSecOneDatabase {
  evsec_one: {
    Tables: {
      profiles: {
        Row: ProfileRow;
        Insert: {
          id: string;
          email?: string | null;
          full_name?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          email?: string | null;
          full_name?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      scans: {
        Row: ScanRow;
        Insert: {
          id?: string;
          user_id: string;
          score: number;
          risk_level: string;
          created_at?: string;
        };
        Update: {
          score?: number;
          risk_level?: string;
          created_at?: string;
        };
      };
      exposures: {
        Row: ExposureRow;
        Insert: {
          id?: string;
          user_id: string;
          type: string;
          source?: string | null;
          severity: ExposureSeverity;
          status: ExposureStatus;
          metadata?: Record<string, Json>;
          created_at?: string;
        };
        Update: {
          type?: string;
          source?: string | null;
          severity?: ExposureSeverity;
          status?: ExposureStatus;
          metadata?: Record<string, Json>;
          created_at?: string;
        };
      };
      broker_removals: {
        Row: BrokerRemovalRow;
        Insert: {
          id?: string;
          user_id: string;
          broker_name: string;
          status: RemovalStatus;
          submitted_at?: string | null;
          updated_at?: string;
        };
        Update: {
          broker_name?: string;
          status?: RemovalStatus;
          submitted_at?: string | null;
          updated_at?: string;
        };
      };
      alerts: {
        Row: AlertRow;
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          description?: string | null;
          severity: ExposureSeverity;
          source?: string | null;
          created_at?: string;
        };
        Update: {
          title?: string;
          description?: string | null;
          severity?: ExposureSeverity;
          source?: string | null;
          created_at?: string;
        };
      };
      action_items: {
        Row: ActionItemRow;
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          description?: string | null;
          priority: ActionPriority;
          status?: ActionStatus;
          created_at?: string;
        };
        Update: {
          title?: string;
          description?: string | null;
          priority?: ActionPriority;
          status?: ActionStatus;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
