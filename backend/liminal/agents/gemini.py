import os
import json
from google import genai
from typing import Any
from thinkledger.google.types import JournalEntry
from thinkledger.utils.context import DEBUG
from thinkledger.helpers.perf_counter import perf_counter


@perf_counter
def gemini_response(prompt: str) -> Any:
    gemini_api_key = os.getenv("GEMINI_API_KEY")
    client = genai.Client(api_key=gemini_api_key)
    return client.models.generate_content(
        # model = "gemini-2.5-pro-preview-05-06",
        model = "gemini-2.5-flash-preview-05-20",
        # model = "gemini-2.0-flash",
        contents=f"{prompt}")


@perf_counter
def sanitize_gemini_response(response: Any) -> JournalEntry:
    cleaned_response = response.text.strip().strip('`').strip()
    if cleaned_response.lower().startswith("json"):
        cleaned_response = cleaned_response[4:].strip()
    if DEBUG >= 2: print(cleaned_response)
    return JournalEntry(**json.loads(cleaned_response))
