import React, { useCallback } from "react";
import type { ProviderModel } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { setSelectedProviderId } from "../store/slices/providerSlice";
import { useNavigate } from "react-router-dom";
import ProviderIcon from "./ProviderIcon";
import { cn } from "../utils/tailwind-utils";
interface ProviderCardProps {
  provider: ProviderModel;
};

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const selectedId = useSelector((state: RootState) => state.provider.selectedProviderId);
  const isSelected = selectedId === provider.id;
  const disabled = !provider.isSupported;
  const count = provider.classifiers?.length ?? 0;

  const handleClick = useCallback(() => {
    if (disabled) return;
    dispatch(setSelectedProviderId(provider.id));
    navigate(`/provider/${provider.id}`);
  }, [disabled, dispatch, navigate, provider.id]);

  return (
    <li className="list-none">
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled}
        aria-selected={isSelected}
        className={cn(
          "w-full flex items-center justify-between gap-4 rounded-xl border px-4 py-3 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          isSelected
              ? "border-indigo-500 ring-1 ring-indigo-500/40 bg-white shadow-sm"
              : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 shadow-xl",
        )}
      >
        <span className="flex items-center gap-3 min-w-0">
          <span className="w-8 h-8 rounded-full grid place-items-center">
            <ProviderIcon name={provider.providerName} />
          </span>
          <span className="truncate text-base" title={provider.providerName}>{provider.providerName}</span>
        </span>
        <span className="shrink-0 text-[11px] text-gray-500">
          {count} Classifier{count === 1 ? "" : "s"}
        </span>
      </button>
    </li>
  );
};

export default ProviderCard;
