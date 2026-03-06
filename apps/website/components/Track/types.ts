
export interface TrackEvent {
  status: string;
  location: string;
  date: string;
  isCompleted?: boolean;
}

export interface TrackResult {
  resi: string;
  courier: string;
  status: string;
  history: TrackEvent[];
}
