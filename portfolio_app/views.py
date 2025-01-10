from django.shortcuts import get_object_or_404,render
from .models import Candidate

def home(request):
    # Fetch candidate with related data
    candidate = get_object_or_404(
        Candidate.objects.prefetch_related('experiences', 'projects', 'candidate_skills'), pk=1
    )
    data= {
        'candidate': candidate,
        'experiences': candidate.experiences.all()[::-1],
        'projects': candidate.projects.all(),
        'skills': candidate.candidate_skills.all(),
    }
    return render(request, 'portfolio/home.html', data)
