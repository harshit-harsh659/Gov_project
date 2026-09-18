import os
from django.core.management.base import BaseCommand
from django.contrib.auth.hashers import make_password
from api.models import User, Department, Case, Document, RoleEnum
from django.utils import timezone
from datetime import timedelta
import uuid

class Command(BaseCommand):
    help = 'Seeds the database with initial data'

    def handle(self, *args, **kwargs):
        if User.objects.filter(username="26000000").exists():
            self.stdout.write("Database already seeded. Skipping.")
            return
            
        self.stdout.write("Seeding departments...")
        depts = [
            Department.objects.get_or_create(name="Cyber Crime Cell", defaults={"department_code": "CYB-01", "organization": "NCRB", "location": "Delhi"})[0],
            Department.objects.get_or_create(name="Women Safety Division", defaults={"department_code": "WSD-02", "organization": "NCRB", "location": "Delhi"})[0],
            Department.objects.get_or_create(name="Forensic Lab", defaults={"department_code": "FSL-03", "organization": "MHA", "location": "Delhi"})[0],
            Department.objects.get_or_create(name="Legal Services", defaults={"department_code": "LGL-04", "organization": "MHA", "location": "Delhi"})[0],
        ]

        self.stdout.write("Seeding users...")
        if not User.objects.filter(username="26000000").exists():
            User.objects.create(username="26000000", employee_id="EMP001", full_name="Super Admin", email="admin@secura.gov", password=make_password("gov123"), role=RoleEnum.SUPER_ADMIN)
        if not User.objects.filter(username="26010001").exists():
            User.objects.create(username="26010001", employee_id="EMP002", full_name="Inspector Rahul Sharma", email="investigator@secura.gov", password=make_password("gov123"), role=RoleEnum.INVESTIGATING_OFFICER, department=depts[0])
        if not User.objects.filter(username="26020001").exists():
            User.objects.create(username="26020001", employee_id="EMP003", full_name="Dr. Anita Mehta", email="forensic@secura.gov", password=make_password("gov123"), role=RoleEnum.FORENSIC_OFFICER, department=depts[2])
        if not User.objects.filter(username="26030001").exists():
            User.objects.create(username="26030001", employee_id="EMP004", full_name="Advocate Priya Patel", email="legal@secura.gov", password=make_password("gov123"), role=RoleEnum.LEGAL_OFFICER, department=depts[3])
        if not User.objects.filter(username="26040001").exists():
            User.objects.create(username="26040001", employee_id="EMP005", full_name="Auditor Verma", email="auditor@secura.gov", password=make_password("gov123"), role=RoleEnum.AUDITOR)

        self.stdout.write("Skipping case seeding (removed placeholders)...")

        self.stdout.write(self.style.SUCCESS('Successfully seeded database'))
