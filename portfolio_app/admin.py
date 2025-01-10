from django.contrib import admin
from .models import Candidate, Experience, Project, Skill, CandidateSkill

admin.site.register(Candidate)
admin.site.register(Experience)
admin.site.register(Project)
admin.site.register(Skill)
admin.site.register(CandidateSkill)