import azure.functions as func
import logging
import json
import os

app = func.FunctionApp()

@app.route(route="health", methods=["GET"], auth_level=func.AuthLevel.ANONYMOUS)
def health_check(req: func.HttpRequest) -> func.HttpResponse:
    return func.HttpResponse(
        json.dumps({"status": "ok", "message": "System operational"}),
        status_code=200,
        mimetype="application/json"
    )
